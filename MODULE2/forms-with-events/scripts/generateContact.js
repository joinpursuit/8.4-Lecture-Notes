function contactTemplate (name, telephone, email, notes, type) {
    const li = document.createElement("li");
    li.textContent += name;
    
    
    if (telephone) {
      const strong = document.createElement("strong");
      strong.textContent = "Tel: ";
      li.append(document.createElement("br"), strong, telephone);
    }
  
    if (email) {
      const strong = document.createElement("strong");
      strong.textContent = "Email: ";
      li.append(document.createElement("br"), strong, email);
    }
  
    if (notes) {
      li.append(document.createElement("br"), notes);
    }
    li.append(document.createElement("br"), type);
    return li;
  }
  // a fifth input 'type' was added here to update the code
  function generateContact (name, telephone, email, notes, type) {
    const li = contactTemplate(name, telephone, email, notes, type);
  
    const ul = document.querySelector("ul");
    ul.append(li);
  }