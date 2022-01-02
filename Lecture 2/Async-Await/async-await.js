async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Done!");
    }, 1000);
  });
  let result = await promise;
  alert(result);
}
f();

// Error Handling
async function f() {
  await Promise.reject(new Error("Whoops!"));
}

async function f() {
  throw new Error("Whoops!");
}

// We can use try and catch
async function f() {
  try {
    let response = await fetch("url");
    let user = await response.json();
  } catch (error) {
    alert(error);
  }
}
