var k = [];
var c = 0;
function Review(fname, lname, email, phno, product, price, website, feedback) {

    this.name = fname + " " + lname;
    this.email = email;
    this.phno = phno;
    this.product = product;
    this.price = price;
    this.website = website;
    this.feedback = feedback;

}

function store(fname) {

    var fname = $('[name="fname"]').val();
    var lname = $('[name="lname"]').val();
    var email = $('[name="email"]').val();
    var phno = $('[name="phno"]').val();
    var product = $('[name="product"]').val();
    var price = $('[name="price"]').val();
    var website = $('[name="website"]').val();
    var feedback = $('[name="feedback"]').val();
    k[c] = new Review(fname, lname, email, phno, product, price, website, feedback)
    c++;

    $('[name="fname"]').val("");
    $('[name="lname"]').val("");
    $('[name="email"]').val("");
    $('[name="phno"]').val("");
    $('[name="product"]').val("");
    $('[name="price"]').val("");
    $('[name="website"]').val("Select Website");
    $('[name="feedback"]').val("");

    var r = $(".review");
    r.html("")
    for (let i = 0; i < k.length; i++) {
        var code = '<div class="section">' +
            '<p class="h4 fs-4">Name : ' + k[i].name + '</p>' +
            '<p class="h5 fs-6">Website : <u>' + k[i].website + '</u></p>' +
            '     <div class="row"> <div class="col-md-2">' +
            '<p class="h5 product fs-6">Product : ' + k[i].product + '</p>' +
            ' </div><div class="col-md-2">' +
            '<p class="h5 fs-6">Price : ' + k[i].price + '</p>' +
            '  </div></div><div class="row"><div class="col-md-2">' +
            '<p class="h6 mail fs-6">E-mail : ' + k[i].email + '</p>' +
            '  </div><div class="col-md-2">' +
            ' <p class="h6 fs-6">Phno : ' + k[i].phno + '</p>' +
            '</div></div><hr>' +
            ' <p>' + k[i].feedback + '</p>' +
            ' </div>'
        r.append(code)
        location.href = "#ref"
    }



    // console.log(fname);
    // console.log(lname);
    // console.log(email);
    // console.log(phno);
    // console.log(product);
    // console.log(price);
    // console.log(website);
    // console.log(feedback);

}