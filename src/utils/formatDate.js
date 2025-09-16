export function formatDate(iso){ 
    try{ 
        return new Date(iso).toLocaleDateString(); 
    } catch { 
        return ""; 
    } 
}