// JavaScript Example: Reading Entities
// Filterable fields: 
async function fetchEntityNameEntities() {
    const response = await fetch(`https://app.base44.com/api/apps/6908e9838afb834482962d1f/entities/EntityName`, {
        headers: {
            'api_key': '22abc5b205ce403aa6f2e61d210df90c', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        }
    });
    const data = await response.json();
    console.log(data);
}

// JavaScript Example: Updating an Entity
// Filterable fields: 
async function updateEntityNameEntity(entityId, updateData) {
    const response = await fetch(`https://app.base44.com/api/apps/6908e9838afb834482962d1f/entities/EntityName/${entityId}`, {
        method: 'PUT',
        headers: {
            'api_key': '22abc5b205ce403aa6f2e61d210df90c', // or use await User.me() to get the API key
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
    });
    const data = await response.json();
    console.log(data);
}