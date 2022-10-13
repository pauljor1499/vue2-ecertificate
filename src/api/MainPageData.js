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
}
