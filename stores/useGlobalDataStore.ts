export const useGlobalDataStore = defineStore('glogalData', () => {

    const isloading = ref(false);
    const configurationDialogStatus = ref(false);
    const showSidoUpdateForm = ref(false)
    const sidoApplicationCode = ref('APP-CODE');
    const notificationMessage = ref('')

    const showMessage = ref(false)
    const longName = ref('Tanzania Annual ICT Conference')
   
      const getYearsArray = computed(() => {
        // const currentYear = new Date().getFullYear();
        const startYear = 1984;
        const yearsArray = [];
        for (let year = startYear; year <= 2006; year++) {
          yearsArray.push(year);
        }
        return yearsArray;
      })
      // toogle laoding 
      const setLoadingTo = (key:string)=> {
        if(key ==='on') isloading.value = true;
        if(key === 'off') isloading.value = false;
       return  isloading.value
      }
      const toogleShowMessage = ()=> {
        showMessage.value ? showMessage.value = false : showMessage.value = true
        setTimeout(function() {
          showMessage.value ? showMessage.value = false : showMessage.value = true
          notificationMessage.value = ''
        }, 6500);
      }
      const AssignNotificationMessage = (message : string)=> {
        notificationMessage.value = message
        toogleShowMessage();
      }  
      const setSidoApplicationCode = (message : string)=> {
        return sidoApplicationCode.value = message
      }  
      const setSidoUpdateForm = (value : boolean)=> {
        return showSidoUpdateForm.value = value
      }  
      
      return { 
          longName, 
         notificationMessage, AssignNotificationMessage, 
         showMessage,toogleShowMessage, 
         getYearsArray, 
         showSidoUpdateForm,setSidoUpdateForm,
         setSidoApplicationCode,sidoApplicationCode,
         isloading, setLoadingTo,
         configurationDialogStatus,
        }
    })