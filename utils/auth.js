export const setToken = () => {
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTZmNjkxNmNmZjI3ZjEzZjE4M2EyNyIsImlhdCI6MTcwOTcxNTA3NCwiZXhwIjoxNzA5ODAxNDc0fQ.EEct9Ae-Dua56Q1ET4aLukqUgKHKPK0eyQz_9WnH4Vo"
    localStorage.setItem("token", token)
}

export const getToken = () => {
    return localStorage.getItem("token")
}