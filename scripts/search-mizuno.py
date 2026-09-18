#!/usr/bin/env python3
"""Busca imagens reais de todos os modelos Mizuno Wave Prophecy."""
import json
import subprocess
import os

# Linha Mizuno Wave Prophecy - todos os modelos conhecidos
QUERIES = [
    ("prophecy-m", "Mizuno Wave Prophecy M running shoe premium"),
    ("prophecy-le", "Mizuno Wave Prophecy LE limited edition sneaker"),
    ("prophecy-ls", "Mizuno Wave Prophecy LS lifestyle sneaker"),
    ("prophecy-edge", "Mizuno Wave Prophecy Edge running shoe"),
    ("prophecy-glide", "Mizuno Wave Prophecy Glide sneaker"),
    ("prophecy-bolt", "Mizuno Wave Prophecy Bolt running shoe"),
    ("prophecy-sonic", "Mizuno Wave Prophecy Sonic sneaker"),
    ("prophecy-classic", "Mizuno Wave Prophecy classic black sneaker"),
    ("prophecy-white", "Mizuno Wave Prophecy white silver sneaker"),
    ("prophecy-red", "Mizuno Wave Prophecy red black running shoe"),
    ("prophecy-blue", "Mizuno Wave Prophecy blue navy sneaker"),
    ("prophecy-grey", "Mizuno Wave Prophecy grey premium sneaker"),
]


def search(item):
    label, query = item
    last_err = ""
    for attempt in range(3):
        try:
            result = subprocess.run(
                ["z-ai", "image-search", "-q", query, "--count", "1", "--gl", "us", "--no-rank"],
                capture_output=True, text=True, timeout=120
            )
            stdout = result.stdout
            json_start = stdout.find("{")
            json_text = stdout[json_start:] if json_start != -1 else ""
            data = json.loads(json_text)
            if data.get("success") and data.get("results"):
                url = data["results"][0].get("original_url", "")
                return {"label": label, "query": query, "url": url}
            last_err = "no results"
        except Exception as e:
            last_err = str(e)
        import time; time.sleep(3)
    print(f"FAIL {label}: {last_err}")
    return {"label": label, "query": query, "url": ""}


def main():
    out_path = "/home/z/my-project/scripts/mizuno.json"
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    results = []
    for q in QUERIES:
        r = search(q)
        print(f"OK {r['label']}: {r['url'][:80]}")
        results.append(r)
    with open(out_path, "w") as f:
        json.dump({"products": results}, f, indent=2)
    print(f"\nSAVED to {out_path}")


if __name__ == "__main__":
    main()
