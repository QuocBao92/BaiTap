let arrViet = ["đến","đi","chào buổi sáng","chào buổi tối","tình yêu","gia đình","xin chào","cái bàn","mùa xuân","hoa"]
let arrAnh = ["come","go","good morning","good evening","love","family","hello","table","spring","flower"]
let words ;

function translate1() {
    words = document.getElementById('words').value;
    let result='';
    let fvalue = document.getElementById('f').value;
    let tvalue = document.getElementById('t').value;
    let fviet = fvalue ==='fviet';
    let fmy = fvalue === 'fmy';
    let tviet = tvalue === 'tviet';
    let tmy = tvalue === 'tmy';
    if (fviet && tmy){
        for (let i=0; i< arrViet.length; i++){
            if (words === arrViet[i]){
                result = arrAnh[i];
                break;
            }else {
                result = 'Không tìm thấy';
            }
        }
    console.log(result);
    }else 
        if(fmy && tviet){
            for (let i = 0; i < arrAnh.length; i++){
                if (words === arrAnh[i]){
                    result = arrViet[i];
                    break ;
                } else {
                    result = 'Không tìm thấy';
                }
            }
    }else {
        result = words;
    }
    document.getElementById('kq').innerHTML ="Kết quả :'"+ result+"'";
}