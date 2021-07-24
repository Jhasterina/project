var images = ["https://cdn3.vectorstock.com/i/1000x1000/79/47/business-woman-cartoon-character-young-attractive-vector-14427947.jpg", "https://image.shutterstock.com/image-vector/cute-little-girl-spring-260nw-337904864.jpg", "https://us.123rf.com/450wm/yupiramos/yupiramos1903/yupiramos190306204/124503077-happy-young-man-character-vector-illustration-design.jpg?ver=6", "https://previews.123rf.com/images/tigatelu/tigatelu1307/tigatelu130700004/20754296-cute-boy-cartoon-standing.jpg", "https://images-na.ssl-images-amazon.com/images/I/61zTGIEvQoL.jpg"];

var names = ["Family Book", "Shriya", "Suhasini", "Priyaranjan"];

var i = 0;

function update() {
    i++;
    var numberForOfFamilyMembersInArray = 3;
    if (i>numberForOfFamilyMembersInArray) {
        i = 0;
    }
    var updateImage = images[i];
    var updatedName = names[i];
    document.getElementById("family_member_image").src = updateImage;
    document.getElementById("family_member_name").innerHTML = up;
}

