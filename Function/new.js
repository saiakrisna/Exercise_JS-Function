alert("selamat datang di kera mart, selamat berbelanja")

        function belanja(buyer, product){
            alert("terimakasih"+ buyer +"telah membeli"+ product );
        }
        var buyer =prompt("Nama :");
        var product=prompt("produk yang dibeli :")
        
        console.log(belanja(buyer, produk));

       
        //Buat sebuah function helper untuk convert temperatur Celcius ke Fahrenherit dan sebaliknya. Ikuti poin-poin dibawah ini:
//Buat sebuah function helper lalu gunakan pada function converternya. Seperti contoh dibawah ini. Jadi kita tinggal membuat function helper dan function utama untuk convert fahrenheit ke Celcius
//

        function  multiply(number) {
            return number - 32;
        }

        function getCel(fahrenheit){
            return multiply(fahrenheit) * (5/9);
        }

       console.log(getCel(15));  
       
       
       //Kita akan membuat program untuk menghitung umur kucing dalam usia manusia. Poin-poinnya adalah:
//Pada usia 1 tahun, umur kucing adalah 15 kali umur manusia
//Pada usia 2 tahun, umur kucing adalah 24 kali umur manusia
//Pada usia 3 tahun (> 24 tahun) dan seterusnya umur kucing adalah ditambah 4 dari umur manusia ketika 24  tahun. Jadi jika umur kucing saat ini 4 tahun berarti dalam kalender tahun kucing, umurnya adalah 32 tahun.
//Buat sebuah ARROW function yang menerima parameter umur kucing berdasarkan perhitungan tahun manusia.

var put = (prompt("Input umur kucing"));
 getAge= (age) => {

if (age >= 3){
    let minAge = 24 + ((age-2) * 4);

    return minAge;
}
}

var conv = catAge =>{

if (catAge === 1){
    return 15 ;
}
    else if(catAge === 2){
        return 24 ;
    }
else{
    return getAge(catAge);
}
};
console.log(alert("Jadi, hasil konversi "+ put+ " tahun kucing setara dengan  " + conv(put) + " tahun umur manusia."));



//Buat sebuah function untuk mengubah format semua string menjadi huruf kecil.
//Menerima 1 parameter string
//Gunakan single line block function
//Output adalah string yang telah diubah formatnya menjadi lower case
//Gunakan built in method string

function myFunction() {
  var str = prompt("input string");
  var res = str.toLowerCase();
}
 console.log(res())


