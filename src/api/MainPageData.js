import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export let MainPageData = [
    {
        templates: [
            {
                title: "Design 1",
                photo: require("@/assets/Designs/Design1.jpg"),
            },

            {
                title: "Design 2",
                photo: require("@/assets/Designs/Design2.jpg"),
            },

            {
                title: "Design 3",
                photo: require("@/assets/Designs/Design3.jpg"),
            },

            {
                title: "Design 4",
                photo: require("@/assets/Designs/Design4.jpg"),
            },

            {
                title: "Design 6",
                photo: require("@/assets/Designs/Design1.jpg"),
            },
        ],
    },
];

export class MainPageService {
    getAllTemplates() {
        return MainPageData[0].templates;
    }

    printToPDF(html) {
        const doc = new jsPDF("l", "in", [6.5, 10]);
        html2canvas(html).then((canvas) => {
            const width = doc.internal.pageSize.getWidth();
            const height = doc.internal.pageSize.getHeight();
            doc.addImage(canvas, "JPEG", 0, 0, width, height);
            doc.save("sample-export.pdf");
        });
    }
}
