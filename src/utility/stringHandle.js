class StringHandle {

    static beautifyHTML(html = '') {
        //remove backslash
        let temp = html.split("\\").join('');
        //remove multiple line breaks
        temp = temp.replace(/[\r\n]{2,}/g, "\n");
        //remove empty tags?
        
        return temp;
    }

    static extract(text = '', limit) {
        return this.beautifyHTML(text).split(' ', limit).join(' ');
    }

    static capitalize(str = '') {
        return str.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));
    }
}

export default StringHandle;