export async function getGuitars() {
    const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
    return await response.json();
}

// export async function getGuitars() {
//     try {
//       const response = await fetch(`${process.env.API_URL}/guitars?populate=image`);
//       console.log("API response:", response);
      
//       if (!response.ok) {
//         throw new Error("Error fetching guitars");
//       }
      
//       const data = await response.json();
//       console.log("Guitars data:", data);
      
//       return data;
//     } catch (error) {
//       console.error("Error in getGuitars():", error);
//       throw error;
//     }
//   }