class Report {
    generate(data) {
        console.log("Raw data: " + data);
    }
}

class HTMLReport extends Report {
    generate(data) {
        console.log("<html><body>" + data + "</body></html>");
    }
}

class JSONReport extends Report {
    generate(data) {
        console.log('{"report": "' + data + '"}');
    }
}

class TextReport extends Report {
    generate(data) {
        console.log("=== REPORT ===\n" + data + "\n==============");
    }
}

let reports = [new HTMLReport(), new JSONReport(), new TextReport()];

reports.forEach(function (r) {
    r.generate("5 tests passed, 1 failed");
    console.log("---");
});