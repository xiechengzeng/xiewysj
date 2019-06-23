 //显示子菜单
    function showSubMenu(li){
        var subMenu = li.getElementsByTagName("ul")[0];
        subMenu.style.display = "block";
    }

    //隐藏子菜单
    function hideSubMenu(li){
        var subMenu = li.getElementsByTagName("ul")[0];
        subMenu.style.display = "none";
    }