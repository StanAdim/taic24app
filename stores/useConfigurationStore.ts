export const useConfigurationStore = defineStore('configurationStore', () => {

    const configurationDialogStatus = ref(false);

   
      const getYearsArray = computed(() => {
        const currentYear = new Date().getFullYear();
        const startYear = currentYear;
        const yearsArray = [];
        for (let year = startYear; year <= 2040; year++) {
          yearsArray.push(year);
        }
        return yearsArray;
      })

      // toogle laoding 
      const toogleDialog = ()=> {
        return configurationDialogStatus.value = !configurationDialogStatus.value
      }

      
      return { 
          toogleDialog,getYearsArray,
         configurationDialogStatus,
        }
    })