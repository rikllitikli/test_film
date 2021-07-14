
$('body').on('click', '#del', function (){
    $("#section_one").remove();
});

$('body').on('click', '#del_one', function (){
    $("#section_two").remove();
});

$("#add").click(function (){
    $("<section id=\"section_two\">\n" +
        "    <div class=\"aside\">\n" +
        "        <img src=\"img/banner.jpg\"/>\n" +
        "        <div class=\"aside_content\">\n" +
        "            <h3> Martian </h3>\n" +
        "            <p>Mars mission Ares-2 in the process was forced to urgently leave the planet because of the impending sandstorm. Engineer and Biolog mark Watney suffered an injury suit during a sand storm. The mission,considering him dead...</p>\n" +
        "            <div class=\"list\">\n" +
        "                <ul>\n" +
        "                    <li>country</li>\n" +
        "                    <li>year</li>\n" +
        "                    <li>Genre</li>\n" +
        "                    <li>actors</li>\n" +
        "                </ul>\n" +
        "                <ul>\n" +
        "                    <li>USA</li>\n" +
        "                    <li>2016</li>\n" +
        "                    <li>Fantasy</li>\n" +
        "                    <li>Aksel Hennie, Chiwetel Ejiofor, Jeff Daniels, Jessica Chastain, Kate Mara, Kristen Wiig, Matt Damon, Michael Pena, Sean Bean, Sebastian Stan</li>\n" +
        "                </ul>\n" +
        "            </div>\n" +
        "            <div class=\"button\">\n" +
        "                <a href=\"#0\" id=\"del_one\">Delete</a>\n" +
        "                <a href=\"#0\">Edit</a>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "    </div>\n" +
        "    <div class=\"coments\">\n" +
        "        <p>Comments: 3 ^</p>\n" +
        "    </div>\n" +
        "</section>").appendTo("body")
})




