const proofread = str => str.toLowerCase().replace(/ie|^.|\.\s+./g, x =>  x === 'ie' ? 'ei' : x.toUpperCase())
