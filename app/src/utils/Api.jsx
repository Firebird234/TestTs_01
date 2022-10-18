export function getData() {
   return fetch("https://api-moscow-mba.herokuapp.com/products", { "Content-Type": "application/json" }).then((res) =>
      checkResponse(res)
   );
}

export function checkResponse(res) {
   if (res.ok) {
      return res.json();
   }

   return Promise.reject(`Ошибочка: ${res.status}`);
}
