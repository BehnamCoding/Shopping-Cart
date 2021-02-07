class Ui {

    constructor() {
        this.itemArea = document.querySelector('#shop-main .shop-content .container .row');
        this.cardBody = document.querySelector('#header .content .box .table-body');
        this.totalPrice = document.querySelector('#header .content .box .total-price .total');
        this.totalCount = document.querySelector('#header .content .box .total-count .count');
    }


    setItems(users) {
        let output = '';
        let data = users.data;

        data.forEach(user => {
            output += `
            <div class="col-md-4 pro-item mt-4">            
                <div class="card">
                    <div class="view view-overlay">
                        <img src="${user.avatar}" alt="product" class="card-img-top">
                    </div>
                    <div class="card-body">
                        <h3 class="card-title text-center">${user.first_name}</h3>
                        <h6 class="sub-title text-muted text-center">${user.last_name}</h6>
                        <div class="card-main mt-5">
                            <p class="card-email mb-3"><span class="text-info">Email:</span> ${user.email}</p>
                            <p class="card-id"><span class="text-info">Id Number:</span> ${user.id}</p>
                        </div>
                        <div class="button">
                            <button class="btn-buy btn btn-block btn-primary mt-4">send to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            `
        });

        this.itemArea.innerHTML = output;

    }

    buyGenerate(items) {
        let data = items.data;
        let tr = document.createElement('tr');
        tr.innerHTML += `        
          <td><img src="${data.avatar}" width="60" alt=""></td>
          <td>${data.first_name}</td>
          <td>${data.email}</td>
          <td>${data.id}</td>

        `

        this.cardBody.appendChild(tr);

        this.addTotal(data);

        this.addCount();
    }

    addCount() {
        this.totalCount.textContent++;
    }

    addTotal(data) {
        let total = parseInt(this.totalPrice.textContent);
        this.totalPrice.textContent = total + data.id;
    }

}