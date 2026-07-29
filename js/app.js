const API_URL = "https://sheetdb.io/api/v1/ya5exrxe5i67c";

const btnBook = document.getElementById("btnBook");

async function bookTour() {

    const customerName = document.getElementById("customerName").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const experience = document.getElementById("experience").value;

    if (!customerName || !phone || !email || !experience) {
        alert("Vui lòng nhập đầy đủ thông tin.");
        return;
    }

    btnBook.disabled = true;
    btnBook.innerText = "Đang gửi...";

    try {

        const response = await fetch(API_URL, {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                data: [{
                    customerName,
                    phone,
                    email,
                    experience
                }]
            })

        });

        const result = await response.json();

        console.log(result);

        alert("🎉 Đặt tour thành công!");

        resetForm();

    }
    catch (error) {

        console.error(error);

        alert("Có lỗi xảy ra!");

    }
    finally {

        btnBook.disabled = false;

        btnBook.innerText = "Đặt Tour";

    }

}

function resetForm() {

    document.getElementById("customerName").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";
    document.getElementById("experience").selectedIndex = 0;

}

btnBook.addEventListener("click", bookTour);