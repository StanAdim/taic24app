type UserCredential = {
    email: string,
    password: string
}
type User = {
    message:string,
    code: number,
    token:string,
    data: UserInfo
}
type UserInfo = {
    id: number
    name: string,
    email: string,
}


export const useAuthStore = defineStore('auth', () => {
    const loggedUser = ref < User | null>(null)
    const isLoggedIn = computed(() => !!loggedUser.value)
    const userError = ref <any>(null)
    //Fetch User
    async function fetchUser() {
        if(process.client){
            const {data,error} = await useApiFetch('/api/user',{
                headers: {
                    Authorization:  `Bearer ${window.localStorage.getItem('token') }`
                }
            });
            if(data.value){
                loggedUser.value = data.value as User
            }
            userError.value = error.value?.statusCode
            // console.log(error)
            return {
                data,error
            }
        }
        
    }
    //Register User
    async function register(info: UserInfo){
        await useApiFetch('/sanctum/csrf-cookie');
        const registerRespose = await useApiFetch('/register',{
          method: 'POST',
          body: info as UserInfo
        });
        // console.log(registerRespose)
        navigateTo('/guest/login')
        return registerRespose;
    }
    //Login User
    async function login(credentials: UserCredential){
         await useApiFetch('/sanctum/csrf-cookie');
        const {data, error} = await useApiFetch('/api/auth/log-user-in',{
          method: 'POST',
          body: credentials as UserCredential
          
        });
        const responseData = data.value as User
        if(responseData.code == 200){
            loggedUser.value = data.value as User
            localStorage.setItem('token',loggedUser.value?.token);
            await fetchUser()
        navigateTo('/crm/admin')
       }
        if(responseData.code == 300){
        navigateTo('/auth/login')
       }
        return {data , error};
    }
    async function logout(){
        if(process.client){
                    await useApiFetch('/api/auth/log-user-out',{method: 'POST',
        headers: {
            Authorization:  `Bearer ${window.localStorage.getItem('token') }`
        }
         })
        }
        loggedUser.value = null
        navigateTo('/auth/login')
    }
    return { 
            loggedUser, 
            login, fetchUser,
            isLoggedIn, userError,
            logout,register
         }
  })