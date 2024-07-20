const carMakes = [
    'Abarth', 'Alfa Romeo', 'Alpina', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Chevrolet',
    'Cadillac', 'Caterham', 'Chrysler', 'Citroën', 'Corvette', 'VITAL NI', 'Smart', 'Seat Leon',
    'Renault', 'Daewoo', 'Daihatsu', 'Dodge', 'DS Automobiles', 'Ferrari', 'Fiat', 'Ford', 'Honda',
    'Hyundai', 'INEOS', 'Infiniti', 'Isuzu', 'Iveco', 'Jaguar', 'Jeep', 'Kia', 'Lada', 'Lamborghini',
    'Lancia', 'Land Rover', 'Lexus', 'Lotus', 'Lucid', 'Lynk & Co', 'Mahindra', 'ONE', 'Maserati',
    'MAXUS', 'Mazda', 'Mercedes-Benz', 'MG', 'MG Rover', 'MINI', 'Mitsubishi', 'NIO', 'Nissan', 
    'Opel', 'Peugeot', 'Piaggio (Vespa)', 'Polestar', 'Pontiac', 'Porsche', 'Proton', 'Renault',
    'Rover', 'Saab', 'Seat', 'Skoda', 'Smart', 'Ssangyong', 'Subaru', 'Suzuki', 'Tata', 'Tesla',
    'Toyota', 'Trabant', 'Triumph', 'VinFast', 'Volkswagen', 'Volvo', 'Wartburg', 'Westfield 1 von 3',
    'Zastava Anzahl Sc'
];

const carModels = {
    'Abarth': ['124 Spider', '595', '695'],
    'Alfa Romeo': ['Giulia', 'Stelvio', 'Giulietta'],
    'Alpina': ['B3', 'B4', 'B5'],
    'Aston Martin': ['DB11', 'Vantage', 'DBS'],
    'Audi': ['A3', 'A4', 'A6', 'Q5', 'Q7'],
    'Bentley': ['Continental', 'Flying Spur', 'Bentayga'],
    'BMW': ['3 Series', '4 Series', '5 Series', '7 Series', 'X1', 'X3'],
    'Bugatti': ['Chiron', 'Divo', 'Centodieci', 'Bolide'],
    'Buick': ['Enclave', 'Encore', 'Envision', 'Regal', 'Lacrosse'],
    'Cadillac': ['ATS', 'CTS', 'Escalade', 'XT4', 'XT5', 'XT6'],
    'Chevrolet': ['Camaro', 'Corvette', 'Equinox', 'Silverado', 'Tahoe'],
    'Chrysler': ['300', 'Pacifica', 'Voyager'],
    'Citroën': ['C1', 'C3', 'C4', 'C5', 'C6', 'Berlingo', 'DS3', 'DS4', 'DS5'],
    'Dacia': ['Duster', 'Sandero', 'Logan', 'Lodgy', 'Dokker'],
    'Dodge': ['Challenger', 'Charger', 'Durango', 'Journey', 'Ram 1500'],
    'Ferrari': ['488', '812', 'California', 'F8', 'Portofino', 'Roma'],
    'Fiat': ['500', 'Panda', 'Tipo', 'Punto', '500X'],
    'Ford': ['Fiesta', 'Focus', 'Mustang', 'Explorer', 'F-150', 'Escape'],
    'GMC': ['Acadia', 'Canyon', 'Sierra', 'Terrain', 'Yukon'],
    'Honda': ['Accord', 'Civic', 'CR-V', 'Fit', 'HR-V', 'Pilot'],
    'Hyundai': ['Elantra', 'Santa Fe', 'Tucson', 'Sonata', 'Veloster'],
    'Jaguar': ['XE', 'XF', 'F-Type', 'E-Pace', 'F-Pace', 'I-Pace'],
    'Jeep': ['Cherokee', 'Compass', 'Gladiator', 'Grand Cherokee', 'Wrangler'],
    'Kia': ['Forte', 'Optima', 'Sorento', 'Soul', 'Sportage'],
    'Lamborghini': ['Aventador', 'Huracan', 'Urus', 'Gallardo', 'Murcielago'],
    'Lancia': ['Delta', 'Ypsilon', 'Thema', 'Voyager'],
    'Land Rover': ['Discovery', 'Range Rover', 'Evoque', 'Defender', 'Freelander'],
    'Lexus': ['ES', 'GS', 'IS', 'LS', 'NX', 'RX'],
    'Maserati': ['Ghibli', 'Levante', 'Quattroporte', 'GranTurismo', 'MC20'],
    'Mazda': ['3', '6', 'CX-5', 'MX-5', 'CX-3', 'CX-9'],
    'McLaren': ['540C', '570S', '650S', '675LT', '720S', 'P1', 'GT'],
    'Mercedes-Benz': ['A-Class', 'C-Class', 'E-Class', 'S-Class', 'GLA', 'GLE', 'AMG GT'],
    'Mini': ['Cooper', 'Countryman', 'Clubman', 'Paceman'],
    'Mitsubishi': ['Eclipse Cross', 'Outlander', 'Lancer', 'Mirage'],
    'Nissan': ['Altima', 'Maxima', 'Murano', 'Pathfinder', 'Rogue', 'Titan'],
    'Opel': ['Astra', 'Corsa', 'Insignia', 'Mokka', 'Zafira'],
    'Pagani': ['Huayra', 'Zonda'],
    'Peugeot': ['208', '308', '3008', '508', '5008'],
    'Porsche': ['911', 'Cayenne', 'Macan', 'Panamera', 'Taycan'],
    'RAM': ['1500', '2500', '3500', '4500', '5500'],
    'Renault': ['Clio', 'Megane', 'Captur', 'Kadjar', 'Talisman'],
    'Rolls-Royce': ['Ghost', 'Wraith', 'Dawn', 'Cullinan', 'Phantom'],
    'Saab': ['9-3', '9-5', '900', '9000'],
    'Seat': ['Ibiza', 'Leon', 'Arona', 'Ateca', 'Tarraco'],
    'Skoda': ['Fabia', 'Octavia', 'Kodiaq', 'Superb', 'Kamiq'],
    'Smart': ['Fortwo', 'Forfour'],
    'Subaru': ['Impreza', 'Forester', 'Outback', 'Legacy', 'WRX'],
    'Suzuki': ['Swift', 'Vitara', 'Jimny', 'Baleno', 'SX4'],
    'Tesla': ['Model 3', 'Model S', 'Model X', 'Model Y'],
    'Toyota': ['Camry', 'Corolla', 'Highlander', 'RAV4', 'Tacoma'],
    'Volkswagen': ['Golf', 'Passat', 'Polo', 'Tiguan', 'Touareg'],
    'Volvo': ['XC40', 'XC60', 'XC90', 'S60', 'V60', 'V90'],
    'Wartburg': ['311', '353', '1.3'],
    'Westfield': ['Seven', 'XTR2', 'Sport 250'],
    'Zastava': ['Yugo', 'Skala', 'Florida'],
    'Other': ['Other']
};

const carYears = {
    'Abarth': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Alfa Romeo': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Alpina': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Aston Martin': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Audi': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Bentley': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'BMW': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Bugatti': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Buick': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Cadillac': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Chevrolet': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Chrysler': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Citroën': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Dacia': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Dodge': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Ferrari': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Fiat': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Ford': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'GMC': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Honda': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Hyundai': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Jaguar': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Jeep': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Kia': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Lamborghini': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Lancia': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Land Rover': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Lexus': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Maserati': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Mazda': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'McLaren': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Mercedes-Benz': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Mini': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Mitsubishi': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Nissan': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Opel': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Pagani': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Peugeot': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Porsche': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'RAM': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Renault': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Rolls-Royce': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Saab': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Seat': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Skoda': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Smart': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Subaru': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Suzuki': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Tesla': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Toyota': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Volkswagen': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Volvo': [2015, 2016, 2017, 2018, 2019, 2020, 2021],
    'Wartburg': [1956, 1966, 1988],
    'Westfield': [1982, 2000, 2015],
    'Zastava': [1980, 1971, 1988],

    'Other': ['Other']
};

document.getElementById('brand').addEventListener('change', function() {
    var brand = this.value;
    var modelSelect = document.getElementById('model');
    var yearSelect = document.getElementById('year');
    var submitButton = document.querySelector('.submit-btn');

    if (brand) {
        this.classList.add('selected');
        modelSelect.removeAttribute('disabled');
        modelSelect.innerHTML = '<option value="">Select model</option>';

        // Dynamically populate models based on selected brand
        carModels[brand]?.forEach(function(model) {
            modelSelect.innerHTML += `<option value="${model}">${model}</option>`;
        });
        modelSelect.innerHTML += '<option value="Other">Other</option>';
    } else {
        this.classList.remove('selected');
        modelSelect.setAttribute('disabled', 'true');
        yearSelect.setAttribute('disabled', 'true');
        submitButton.setAttribute('disabled', 'true');
    }
});

document.getElementById('model').addEventListener('change', function() {
    var model = this.value;
    var yearSelect = document.getElementById('year');
    var modelOther = document.getElementById('model-other');
    var submitButton = document.querySelector('.submit-btn');
    var brand = document.getElementById('brand').value;

    if (model) {
        this.classList.add('selected');
        if (model === 'Other') {
            modelOther.classList.remove('hidden');
            modelOther.addEventListener('input', function() {
                if (modelOther.value.trim()) {
                    yearSelect.removeAttribute('disabled');
                } else {
                    yearSelect.setAttribute('disabled', 'true');
                }
            });
        } else {
            modelOther.classList.add('hidden');
            yearSelect.removeAttribute('disabled');
            yearSelect.innerHTML = '<option value="">Select first registration</option>';

            // Dynamically populate years based on selected brand
            carYears[brand]?.forEach(function(year) {
                yearSelect.innerHTML += `<option value="${year}">${year}</option>`;
            });
            yearSelect.innerHTML += '<option value="Other">Other</option>';
        }
    } else {
        this.classList.remove('selected');
        yearSelect.setAttribute('disabled', 'true');
        submitButton.setAttribute('disabled', 'true');
    }
});

document.getElementById('year').addEventListener('change', function() {
    var year = this.value;
    var yearOther = document.getElementById('year-other');
    var submitButton = document.querySelector('.submit-btn');

    if (year) {
        this.classList.add('selected');
        if (year === 'Other') {
            yearOther.classList.remove('hidden');
            yearOther.addEventListener('input', function() {
                if (yearOther.value.trim()) {
                    document.getElementById('shape-group').classList.remove('hidden');
                } else {
                    document.getElementById('shape-group').classList.add('hidden');
                }
            });
        } else {
            yearOther.classList.add('hidden');
            document.getElementById('shape-group').classList.remove('hidden');
        }
    } else {
        this.classList.remove('selected');
        document.getElementById('shape-group').classList.add('hidden');
        submitButton.setAttribute('disabled', 'true');
    }
});

document.querySelectorAll('.option-box').forEach(function(box) {
    box.addEventListener('click', function() {
        var parentGroup = this.parentElement;
        parentGroup.querySelectorAll('.option-box').forEach(function(option) {
            option.classList.remove('selected');
        });
        this.classList.add('selected');

        var otherInput = parentGroup.querySelector('input[type="text"]');
        if (this.getAttribute('data-value') === 'Other') {
            otherInput.classList.remove('hidden');
            otherInput.addEventListener('input', function() {
                if (otherInput.value.trim()) {
                    enableNextGroup(parentGroup);
                } else {
                    disableNextGroup(parentGroup);
                }
            });
        } else {
            otherInput.classList.add('hidden');
            enableNextGroup(parentGroup);
        }
    });
});

function enableNextGroup(parentGroup) {
    var currentGroup = parentGroup.id;
    if (currentGroup === 'shape-group') {
        document.getElementById('fuel-group').classList.remove('hidden');
    } else if (currentGroup === 'fuel-group') {
        document.getElementById('variant-group').classList.remove('hidden');
    } else if (currentGroup === 'variant-group') {
        document.getElementById('horsepower-group').classList.remove('hidden');
    } else if (currentGroup === 'horsepower-group') {
        document.getElementById('transmission-group').classList.remove('hidden');
    } else if (currentGroup === 'transmission-group') {
        document.getElementById('doors-group').classList.remove('hidden');
    } else if (currentGroup === 'doors-group') {
        document.getElementById('mileage-group').classList.remove('hidden');
    }
}

function disableNextGroup(parentGroup) {
    var currentGroup = parentGroup.id;
    if (currentGroup === 'shape-group') {
        document.getElementById('fuel-group').classList.add('hidden');
    } else if (currentGroup === 'fuel-group') {
        document.getElementById('variant-group').classList.add('hidden');
    } else if (currentGroup === 'variant-group') {
        document.getElementById('horsepower-group').classList.add('hidden');
    } else if (currentGroup === 'horsepower-group') {
        document.getElementById('transmission-group').classList.add('hidden');
    } else if (currentGroup === 'transmission-group') {
        document.getElementById('doors-group').classList.add('hidden');
    } else if (currentGroup === 'doors-group') {
        document.getElementById('mileage-group').classList.add('hidden');
    }
}

document.getElementById('mileage').addEventListener('input', function() {
    var mileage = this.value;
    var additionalOptionsGroup = document.getElementById('additional-options-group');
    var submitButton = document.querySelector('.submit-btn');
    var uploadImageGroup = document.getElementById('upload-image-group');

    if (mileage) {
        additionalOptionsGroup.classList.remove('hidden');
        uploadImageGroup.classList.remove('hidden');
        submitButton.removeAttribute('disabled');
    } else {
        additionalOptionsGroup.classList.add('hidden');
        uploadImageGroup.classList.add('hidden');
        submitButton.setAttribute('disabled', 'true');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('car-review-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const data = {
            brand: document.getElementById('brand').value,
            brand_other: document.getElementById('brand-other').value,
            model: document.getElementById('model').value !== 'Other' ? document.getElementById('model').value : document.getElementById('model-other').value,
            year: document.getElementById('year').value !== 'Other' ? document.getElementById('year').value : document.getElementById('year-other').value,
            shape: document.querySelector('#shape-group .option-box.selected')?.getAttribute('data-value') !== 'Other' ? document.querySelector('#shape-group .option-box.selected')?.getAttribute('data-value') : document.getElementById('shape-other').value,
            fuel: document.querySelector('#fuel-group .option-box.selected')?.getAttribute('data-value') !== 'Other' ? document.querySelector('#fuel-group .option-box.selected')?.getAttribute('data-value') : document.getElementById('fuel-other').value,
            variant: document.querySelector('#variant-group .option-box.selected')?.getAttribute('data-value') !== 'Other' ? document.querySelector('#variant-group .option-box.selected')?.getAttribute('data-value') : document.getElementById('variant-other').value,
            horsepower: document.querySelector('#horsepower-group .option-box.selected')?.getAttribute('data-value') !== 'Other' ? document.querySelector('#horsepower-group .option-box.selected')?.getAttribute('data-value') : document.getElementById('horsepower-other').value,
            transmission: document.querySelector('#transmission-group .option-box.selected')?.getAttribute('data-value') !== 'Other' ? document.querySelector('#transmission-group .option-box.selected')?.getAttribute('data-value') : document.getElementById('transmission-other').value,
            doors: document.querySelector('#doors-group .option-box.selected')?.getAttribute('data-value') !== 'Other' ? document.querySelector('#doors-group .option-box.selected')?.getAttribute('data-value') : document.getElementById('doors-other').value,
            mileage: document.getElementById('mileage').value,
            sell_plan: document.getElementById('sell-plan').value,
            prefer_to_sell: document.getElementById('prefer-to-sell').value,
            email: document.getElementById('email').value
        };

        emailjs.send('service_lltcwlr', 'template_916aebj', data)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your review has been submitted successfully.');
            }, function(error) {
                console.log('FAILED...', error);
                alert('Failed to send your review. Please try again.');
            });
    });
});




let lastScrollTop = 0;
let isScrolling;
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop) {
  
        header.style.top = `-${headerHeight}px`;
        header.classList.remove('scrolling', 'static');
    } else {

        header.style.top = '0';
        header.classList.add('scrolling');
        header.classList.remove('static');
    }
    
    lastScrollTop = Math.max(scrollTop, 0);
    clearTimeout(isScrolling);

    isScrolling = setTimeout(function() {

        header.classList.remove('scrolling');
        header.classList.add('static');
    }, 200); 
});



document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});