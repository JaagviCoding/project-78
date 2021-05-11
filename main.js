var images = ["https://st.depositphotos.com/1967477/4473/v/600/depositphotos_44735787-stock-illustration-happy-family-cartoon.jpg","https://st.depositphotos.com/1724125/2693/v/950/depositphotos_26930203-stock-illustration-cartoon-dad.jpg","https://image.shutterstock.com/image-vector/working-mom-260nw-158801603.jpg","https://us.123rf.com/450wm/yupiramos/yupiramos1905/yupiramos190505227/122760736-little-girl-avatar-character-vector-illustration-design.jpg?ver=6","https://cdn3.iconfinder.com/data/icons/family-member-flat-happy-family-day/512/Sister-512.png"];
var names = ["Family Book", "Amit Shah", "Chital Shah", "Jaagvi Shah", "Urvi Shah"];

var i = 0;
function update()
{

    i++;
    var numbers_of_family_member_in_array = 4;
    if(i > numbers_of_family_member_in_array)
   {
      i = 0;
   }
   var updatedImage = images[i];
   var updateName = names[i];
   document.getElementById("family_member_image").src = updatedImage;
   document.getElementById("family_member_name").innerHTML = updateName;
   }