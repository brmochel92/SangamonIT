;(function () {
	let state = {
		cellManufacturer: '',
		cellGroupModel: '',
		cellModel: '',
		repairType: ''
	}

	const cellQuoteModal = document.querySelector('#cellquoteModal')
	const form = cellQuoteModal.querySelector('form')
	const submitButton = form.querySelector('button[type=submit]')
	const cellSelectContainers = document.querySelectorAll('div[data-level]')
	const selects = cellQuoteModal.querySelectorAll('select')
	const [manufacturerSel, groupModelSel, modelSel, repairTypeSel] = selects

	function populateSelect (select, options) {
		select.innerHTML = ''
		const emptyOption = document.createElement('option')
		emptyOption.hidden = true
		emptyOption.textContent = 'Select one...'
		select.appendChild(emptyOption)

		Object.keys(options).forEach(key => {
			const option = document.createElement('option')
			option.value = key
			option.textContent = options[key].label
			select.appendChild(option)
		})
	}

	populateSelect(manufacturerSel, CELL_DATA)

	cellQuoteModal.addEventListener('change', ev => {
		const select = ev.target
		const { name, value } = select
		state[name] = value
		const container = select.parentNode
		const level = +container.dataset.level
		const nextContainer = cellSelectContainers[level + 1]

		if (state.repairType) {
			submitButton.disabled = false
		}

		if (!nextContainer) {
			return
		}
		submitButton.disabled = true
		nextContainer.style.display = 'block'
		const nextSelect = nextContainer.querySelector('select')
		container.style.display = 'none'
		let nextOptions = CELL_DATA[state.cellManufacturer].options

		if (state.cellGroupModel) {
			nextOptions = nextOptions[state.cellGroupModel].options
			if (state.cellModel) {
				nextOptions = nextOptions[state.cellModel].options
			}
		}

		populateSelect(nextSelect, nextOptions)
	})

	form.addEventListener('reset', ev => {
		state = {
			cellManufacturer: '',
			cellGroupModel: '',
			model: '',
			repairType: ''
		}
		cellSelectContainers.forEach((c, idx) => {
			if (idx === 0) {
				c.style.display = 'block'
			} else {
				c.style.display = 'none'
			}
		})

		selects.forEach(s => {
			s.value = ''
		})
		submitButton.disabled = false
	})

	form.addEventListener('submit', ev => {
		ev.preventDefault()
		console.log('state', state)
		const { cellManufacturer, cellGroupModel, cellModel, repairType } = state
		// let a = CELL_DATA[cellManufacturer]
		// console.log({ cellManufacturer })
		const price =
			CELL_DATA[cellManufacturer].options[cellGroupModel].options[cellModel].options[repairType]
				.price
		// alert(price)
	})
})()
