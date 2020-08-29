import Axios from "axios";

export default function() {
  return new Promise((resolve, reject) => {
    Axios.get("http://testwork.rdbx24.ru/api/")
      .then(response => {
        if (response.data.result) {
          resolve(response.data.result);
        } else reject();
      })
      .catch(err => {
        reject(err);
      });
  });
}
