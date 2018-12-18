{
   
const items = [9,6,5, 1];
const size = 4;

    minCoins(x) 
    { 
          
        // base case 
        if (x == 0) return 0; 
          
        // Initialize result 
        // int res = int.MaxValue; 
          
        // Try every coin that has 
        // smaller value than V 
        for(let item of items) 
        { 
            if (item <= x) 
            { 
                int sub_res = minCoins(coins, m, 
                                  V - coins[i]); 
          
                // Check for INT_MAX to  
                // avoid overflow and see  
                // if result can minimized 
                if (sub_res != int.MaxValue &&  
                            sub_res + 1 < res) 
                    res = sub_res + 1; 
            } 
        } 
        return res; 
    } 
}