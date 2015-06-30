function render(html, data) {
    function replace(html, key, value) {
        return html.replace("{{" + key + "}}", value);
    }
    var template;
    if (data instanceof Array) {
        template = html;
        html = "";
    }
    for (var a in data) {
        if (template) {
            html += template;
            for (var b in data[a]) {
                html = replace(html, b, data[a][b]);
            }
        } else {
            html = replace(html, a, data[a]);
        }
    }
    return html;
}
