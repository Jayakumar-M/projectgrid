var box_ing ='first';
var a='null';
var first_table='block1';

function clickable1(column_align){
    var checking=column_align;
    document.getElementById(box_ing).classList.remove('change');
    document.getElementById(checking).classList.add('change');
    a=checking;
    checking=box_ing;
    box_ing=a;
}

function clickable2(item_alignment){
    var check=item_alignment;
    document.getElementById(first_table).classList.remove('change');
    document.getElementById(check).classList.add('change');
    a=check;
    check=first_table;
    first_table=a;
}




