import { d as defineStore } from '../server.mjs';

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
            this.setError("\u041D\u0435\u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E\u0435 \u0418\u043C\u044F \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430 \u0438\u043B\u0438 \u041F\u0430\u0440\u043E\u043B\u044C");
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
        this.setError("\u0421\u0435\u0442\u0435\u0432\u0430\u044F \u043E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u043F\u044B\u0442\u043A\u0435 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438");
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

export { useLoaderStore as a, useAuthStore as u };
//# sourceMappingURL=Loader-DhsX2-kj.mjs.map
