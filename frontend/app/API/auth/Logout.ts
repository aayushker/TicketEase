export const logout = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
};