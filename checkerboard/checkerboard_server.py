from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def eights():
    return render_template("8by8.html")

@app.route('/4')
def four():
    return render_template("8by4.html")

@app.route('/<int:x>/<int:y>')
def xbyy(x,y):
    return render_template("xByY.html", x = x, y = y)

@app.route('/<int:x>/<int:y>/<color0>/<color1>')
def color(x,y, color0, color1):
    return render_template("xycolor.html", x = x, y = y, color0 = color0, color1 = color1)


if __name__ == "__main__":
    app.run(debug = True, port = 8000)