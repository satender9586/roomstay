export function setCookie(key, value, extraDays = false) {
  if (typeof window !== "undefined") {
    let defaultSeconds = 1296000; //Set it for 15 days
    if (extraDays) {
      defaultSeconds = 2592000;
    }
    document.cookie = `${key}=${value};max-age=${defaultSeconds};path=/;`;
  }
}

export function getCookie(cookieName) {
  if (typeof window !== "undefined") {
    const name = cookieName + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");

    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i].trim();
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return "";
  }
}

export function deleteCookie(cookieName) {
  if (typeof window !== "undefined") {
    document.cookie = `${cookieName}=;max-age=-1296000; path=/;`;
  }
}

export function deleteAllCookies() {
  if (typeof window !== "undefined") {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;max-age=-1296000; path=/";
    }
  }
}

// Authentication cookie function

export function setLoginCredentials(obj, extraDays = false) {
  if (typeof window !== "undefined") {
    setCookie("userId", obj?.userId, extraDays);
    setCookie("token", obj?.token, extraDays);
  }
}

//Cookies setter function

export function setUserId(value) {
  setCookie("userId", value);
}

export function setToken(token) {
  setCookie("token", token);
}

/// Cookies getter functions

export const getUserId = () => {
  return getCookie("userId");
};

export const getUserToken = () => {
  return getCookie("token");
};
