import process from "process"

export async function getClans(){
    const resp = await fetchClans("/clans/%232LJVYGGOY")
    const data = await resp.json()
    return data
}

function fetchClans(endpoint) {
  return fetch(`${process.env.CLASH_OF_CLANS_API_URL}${endpoint}`,{
    headers:{
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.CLASH_OF_CLANS_API_TOKEN}`,
    }
  }
  )
}
