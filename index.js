var url = "http://159.223.51.203:81/api/bio";

var req = new Request(url);
fetch(req)
  .then((response) => response.json())
  .then((data) => {
    let output = "";
    console.log(data);
    data.forEach((post) => {
      output += `
      <div class="col-xl-3 col-md-6 mb-4">
        <div class="card border-left-primary shadow h-100 py-2">
          <div class="card-body">
            <div class="row no-gutters align-items-center">
              <div class="col mr-2">
                <div
                  class="text-xs font-weight-bold text-primary text-uppercase mb-1"
                >
                ${post.name}
                </div>
                <div class="h5 mb-0 font-weight-bold text-gray-800">
                ${post.id}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
    });
    document.getElementById("output").innerHTML = output;
  });
