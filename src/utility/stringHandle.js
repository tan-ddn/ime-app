class StringHandle {

    static beautifyHTML(html = '', removeHTML = false) {
        //remove backslash
        let temp = html.split("\\").join('');
        //remove multiple line breaks
        temp = temp.replace(/[\r\n]{2,}/g, "\n");
        //remove empty tags?

        if (removeHTML) {
            let tmp = document.createElement("DIV");
            tmp.innerHTML = html;
            temp = tmp.textContent || tmp.innerText || "";
        }
        
        return temp;
    }

    static extract(text = '', limitWord) {
        return this.beautifyHTML(text).split(' ', limitWord).join(' ');
    }

    static capitalize(str = '') {
        return str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    }
}

export default StringHandle;