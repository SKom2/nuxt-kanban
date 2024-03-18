import { d as defineStore } from "../server.mjs";
const useAuthStore = defineStore("auth", {
  state: () => ({
    isAuthenticated: false,
    accessToken: "",
    refreshToken: "",
    errorMessage: ""
  }),
  actions: {
    setAuthentication(status) {
      this.isAuthenticated = status;
    },
    setAccessToken(token) {
      localStorage.setItem("accessToken", JSON.stringify(token));
    },
    setRefreshToken(token) {
      localStorage.setItem("refreshToken", JSON.stringify(token));
    },
    setError(message) {
      this.errorMessage = message;
    },
    async authenticateUser(username, password) {
      try {
        const response = await fetch("https://trello.backend.tests.nekidaem.ru/api/v1/users/token/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ username, password })
        });
        if (response.ok) {
          const data = await response.json();
          this.setAccessToken(data.access);
          this.setRefreshToken(data.refresh);
          this.setAuthentication(true);
          return true;
        } else {
          const error = await response.json();
          if (error.password) {
            this.setError(error.password[0]);
          } else if (error.username) {
            this.setError(error.username[0]);
          } else if (error.detail) {
            this.setError("Неправильное Имя аккаунта или Пароль");
          }
          return false;
        }
      } catch (error) {
        console.error("Authentication error:", error);
      }
    },
    async createUser(username, email, password) {
      try {
        const response = await fetch("https://trello.backend.tests.nekidaem.ru/api/v1/users/create/", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, email, password })
        });
        if (response.ok) {
          return true;
        } else {
          const error = await response.json();
          if (error.password) {
            this.setError(error.password[0]);
          } else if (error.email) {
            this.setError(error.email[0]);
          } else if (error.username) {
            this.setError(error.username[0]);
          }
          return false;
        }
      } catch (error) {
        this.setError("Сетевая ошибка при попытке регистрации");
        console.error("Registration error:", error);
        return false;
      }
    },
    logout() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      this.setAuthentication(false);
    }
  }
});
const useLoaderStore = defineStore("loader", {
  state: () => ({
    isLoading: false
  }),
  actions: {
    toggleIsLoading(status) {
      this.isLoading = status;
    }
  }
});
export {
  useLoaderStore as a,
  useAuthStore as u
};
//# sourceMappingURL=Loader-DhsX2-kj.js.map
