from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os
from dotenv import load_dotenv
from supabase import create_client, Client

# Set directories properly for Render
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Dist is in the root (one level up from backend)
DIST_FOLDER = os.path.join(BASE_DIR, '..', 'dist')

app = Flask(__name__, static_folder=DIST_FOLDER, static_url_path='')
CORS(app)

# Load environment variables
load_dotenv(os.path.join(BASE_DIR, '..', '.env'))

# 🛰️ SUPABASE CONFIGURATION
SUB_URL = os.environ.get("SUPABASE_URL")
SUB_KEY = os.environ.get("SUPABASE_SERVICE_ROLE_KEY") or os.environ.get("SUPABASE_ANON_KEY")

supabase_internal = None
if SUB_URL and SUB_KEY:
    try:
        supabase_internal = create_client(SUB_URL, SUB_KEY)
        print("[READY] Supabase Internal Handshake: SUCCESSFUL (DB_SYNCHRONIZED)")
    except Exception as e:
        print(f"[ERROR] Supabase Init Failed: {e}")

# API ENDPOINTS (MUST BE BEFORE CATCH-ALL)
@app.route('/api/get-proposals', methods=['GET', 'OPTIONS'])
def get_proposals():
    if request.method == 'OPTIONS': return jsonify({'status': 'ok'}), 200
    if not supabase_internal: return jsonify({'error': 'Database connect string missing'}), 500
    try:
        response = supabase_internal.table("proposals").select("*").order("created_at", desc=True).execute()
        return jsonify(response.data), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/send-proposal', methods=['POST', 'OPTIONS'])
def send_proposal():
    if request.method == 'OPTIONS': return jsonify({'status': 'ok'}), 200
    if not supabase_internal: return jsonify({'error': 'Backend offline'}), 500
    try:
        data = request.json
        res = supabase_internal.table("proposals").insert(data).execute()
        return jsonify({"message": "Success", "data": res.data}), 201
    except Exception as e:
        return jsonify({'error': str(e)}), 400

# CATCH-ALL ROUTE: Serve React Static Files or index.html
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 10000))
    app.run(host='0.0.0.0', port=port)
