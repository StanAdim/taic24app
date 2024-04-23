export const useGeneralDataStor = defineStore('generalData', () => {
    const isloading = ref(false);
    const drawerState = ref(false);
    const showSidoUpdateForm = ref(false)
    const sidoApplicationCode = ref('APP-CODE');
    const notificationMessage = ref('')
    const showMessage = ref(false)
   
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
      const toogleDrawerState = ()=> {
        return drawerState.value = !drawerState.value
      }
      const toogleLoading = ()=> {
       return  isloading.value  = !isloading.value
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
         notificationMessage, AssignNotificationMessage, 
         showMessage,toogleShowMessage, 
         getYearsArray, 
         showSidoUpdateForm,setSidoUpdateForm,
         setSidoApplicationCode,sidoApplicationCode,
         isloading, toogleLoading,
         toogleDrawerState,drawerState
        }
    })