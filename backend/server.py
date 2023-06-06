from flask import Flask

app = Flask(__name__)


@app.route("/api/")
def test():
    return {"test": "testing"}


if __name__ == "__main__":
    # when running this locally use app.run(debug=True)
    app.run(host="0.0.0.0", port=8080, debug=True)
