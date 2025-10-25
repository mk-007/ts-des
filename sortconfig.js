const tableConfig = {
    chambers: {
        columns: [
            { key: 'name', label: 'Модель', sortable: true, showInTable: true, isLink: true },
            { key: 'desmethods', label: 'Методы дезинфекции', sortable: false, showInTable: false },
            { key: 'blockconstruction', label: 'Камера дезинфекционная представляет собой блочную конструкцию, состоящую из двух блоков - блока камеры и блока управления', sortable: false, showInTable: false },
            { key: 'source', label: 'Источник пара', sortable: true, showInTable: true },
            { key: 'passthrough', label: 'Камера проходного типа с загрузкой в "грязной" зоне и выгрузке в "чистой" зоне помещения', sortable: false, showInTable: false },
            { key: 'control', label: 'Управление камерой дезинфекционной', sortable: false, showInTable: false },
            { key: 'programming', label: 'Программирование дезинфектором необходимых значений параметров температуры и времени экспозиции', sortable: false, showInTable: false },
            { key: 'memory', label: 'Сохранение в памяти последних значений заданных параметров', sortable: false, showInTable: false },
            { key: 'display', label: 'Графический дисплей для оперативного контроля и управления параметрами дезинфекции', sortable: false, showInTable: false },
            { key: 'selftest', label: 'Автоматическое самотестирование программы управления на наличие возможных неисправностей в работе дезинфекционной камеры', sortable: false, showInTable: false },
            { key: 'manualmode', label: 'Возможность перехода на ручной режим управления', sortable: false, showInTable: false },
            { key: 'construction', label: 'Корпус камеры сварной из листовой стали и уголков с теплоизоляцией', sortable: false, showInTable: false },
            { key: 'material', label: 'Материал изготовления камеры дезинфекционной', sortable: false, showInTable: false },
            { key: 'bodytype', label: 'Корпус рабочей камеры цельносварной', sortable: false, showInTable: false },
            { key: 'volume', label: 'Рабочий объем камеры (м³), не менее', sortable: true, showInTable: true },
            { key: 'square', label: 'Площадь пола дезкамеры (м²), не менее', sortable: true, showInTable: true },
            { key: 'maxloading', label: 'Норма загрузки (кг)', sortable: true, showInTable: true },
            { key: 'internal', label: 'Внутренние размеры рабочей камеры (мм)', sortable: false, showInTable: false },
            { key: 'dimensions', label: 'Габаритные размеры (мм)', sortable: false, showInTable: false },
            { key: 'pult', label: 'Блок (пульт) управления встроенным парогенератором', sortable: false, showInTable: false },
            { key: 'disconnect', label: 'Возможность отсоединения блока с парогенератором от рабочей камеры', sortable: false, showInTable: false },
            { key: 'weight', label: 'Масса (кг)', sortable: false, showInTable: false },
            { key: 'doors', label: 'Количество дверей (шт.)', sortable: false, showInTable: false },
            { key: 'locks', label: 'Запирающие устройства дверей, обеспечивающие их плотное прилегание: винтовые зажиимы штурвального типа с рукоятками, шт, не менее', sortable: false, showInTable: false },
            { key: 'bearings', label: 'Встроенные подшипники винтовых зажимов, обеспечивающие легкость вращения штурвальных рукояток', sortable: false, showInTable: false },
            { key: 'seals', label: 'Резиновые уплотнители дверей для сохранения герметичности камеры', sortable: false, showInTable: false },
            { key: 'voltage', label: 'Питание', sortable: false, showInTable: false },
            { key: 'power', label: 'Мощность (кВт), не более', sortable: true, showInTable: true },
            { key: 'workingtemperature', label: 'Рабочая температура внутри камеры', sortable: false, showInTable: false },
            { key: 'tempdisplay', label: 'Отображение значения температуры в камере на ЖК-индикаторе', sortable: false, showInTable: false },
            { key: 'tempaccuracy', label: 'Предельное отклонение температуры в контрольной точке, не более', sortable: false, showInTable: false },
            { key: 'steamgenerator', label: 'Встроенный парогенератор - закрытый сосуд цилиндрической формы для производства насыщенного водяного пара, работающий под давлением', sortable: false, showInTable: false },
            { key: 'tempcontrol', label: 'Термодатчик для контроля температуры в парогенераторе', sortable: false, showInTable: false },
            { key: 'maxtemp', label: 'Максимальная температура насыщенного пара в парогенераторе °C, не менее', sortable: false, showInTable: false },
            { key: 'displaytemperaturesteam', label: 'Отображение значения температуры в парогенераторе на ЖК-индикаторе', sortable: false, showInTable: false },
            { key: 'steamoutside', label: 'Расположение парогенератора вне рабочей камеры', sortable: false, showInTable: false },
            { key: 'steampower', label: 'Мощность парогенератора (кВт), не менее', sortable: false, showInTable: false },
            { key: 'safetyvalve', label: 'Предохранительный клапан для быстрого сброса пара при превышении максимального допускаемого рабочего давления в парогенераторе', sortable: false, showInTable: false },
            { key: 'autowater', label: 'Автоматическая заливка воды в парогенератор и автоматическое поддержание ее на необходимом уровне в течение всего цикла дезинфекции', sortable: false, showInTable: false },
            { key: 'waterlevel', label: 'Указатель уровня, обеспечивающий ввозможность визуального наблюдения за уровнем воды в парогенераторе, с двумя рисками - верхнего и нижнего уровня заливаемой воды', sortable: false, showInTable: false },
            { key: 'manometer', label: 'Манометр для контроля давления в парогенераторе', sortable: false, showInTable: false },
            { key: 'steamsupply', label: 'Подача насыщенного водяного пара в камеру под давлением по замкнутому перфорированному паропроводу в нижней части рабочей камеры', sortable: false, showInTable: false },
            { key: 'hydroprotection', label: 'Гидрозащитный зонт, предотвращающий попадание конденсата на дезинфицирующий материал', sortable: false, showInTable: false },
            { key: 'cart', label: 'Тележка загрузочная с двумя направляющими для размещения вешалок и опорами для полок', sortable: false, showInTable: false },
            { key: 'doorthermometer', label: 'Термометр в верхней части двери «чистой» зоны', sortable: false, showInTable: false },
            { key: 'exhaust', label: 'Вытяжной воздуховод с клапаном для удаления пара из камеры', sortable: false, showInTable: false },
            { key: 'fan', label: 'Вентилятор для удаления пара из камеры после завершения экспозиции', sortable: false, showInTable: false },
            { key: 'fanpower', label: 'Производительность вентилятора (м³/час), не менее', sortable: false, showInTable: false },
            { key: 'inlet', label: 'Приточное вентиляционное отверстие в нижней части камеры с клапаном', sortable: false, showInTable: false },
            { key: 'draincock', label: 'Кран для слива воды из парогенератора', sortable: false, showInTable: false },
            { key: 'condensate', label: 'Водосливной патрубок для слива конденсата из камеры', sortable: false, showInTable: false },
            { key: 'formalin', label: 'Испаритель формалина с воронкой и краном для заливки', sortable: false, showInTable: false },
            { key: 'formalinindrain', label: 'Сливной патрубок с краном для слива остатков формалина после нейтрализации', sortable: false, showInTable: false }
        ],
        filters: [
            { key: 'all', label: 'Все модели' },
            { key: 'compact', label: 'Компактные', condition: (product) => (product.specifications?.volume || 0) < 1.0 },
            { key: 'professional', label: 'Габаритные', condition: (product) => (product.specifications?.volume || 0) >= 1.0 }
        ],
        sortOptions: [
            { value: 'name', label: 'По названию' },
            { value: 'volume', label: 'По объему камеры' },
            { value: 'power', label: 'По мощности' },
            { value: 'maxloading', label: 'По максимальной загрузке' }
        ]
    },

    sterilizers: {
        columns: [
            { key: 'name', label: 'Модель', sortable: true, showInTable: true, isLink: true },
            { key: 'volume', label: 'Объем камеры (л), не менее', sortable: true, showInTable: true },
            { key: 'diameter', label: 'Внутренний диаметр стерилизационной камеры (мм)', sortable: false, showInTable: false },
            { key: 'type', label: 'Тип', sortable: false, showInTable: true },
            { key: 'doortype', label: 'Двери', sortable: false, showInTable: false },
            { key: 'steamgenerator', label: 'Парогенератор', sortable: false, showInTable: false },
            { key: 'loading', label: 'Способ загрузки', sortable: false, showInTable: false },
            { key: 'control', label: 'Способ управления стерилизатором', sortable: false, showInTable: false },
            { key: 'modes', label: 'Количество режимов стерилизации', sortable: false, showInTable: true },
            { key: 'manualmode', label: 'Ручной полуавтоматический режим', sortable: false, showInTable: false },
            { key: 'pressure', label: 'Рабочее давление пара (МПа)/(кгс/см²)', sortable: true, showInTable: true },
            { key: 'voltage', label: 'Электропитание (В)', sortable: false, showInTable: false },
            { key: 'power', label: 'Потребляемая мощность (кВт), не более', sortable: false, showInTable: false },
            { key: 'waterfill', label: 'Способ залива воды', sortable: false, showInTable: false },
            { key: 'closemechanic', label: 'Способ закрытия двери камеры', sortable: false, showInTable: true },
            { key: 'doorlock', label: 'Способ блокировки двери камеры', sortable: false, showInTable: false },
            { key: 'vacuumdry', label: 'Вакуумная сушка', sortable: false, showInTable: false },
            { key: 'recorder', label: 'Регистрирующее устройство', sortable: false, showInTable: false },
            { key: 'printer', label: 'Принтер', sortable: false, showInTable: false },
            { key: 'dimensions', label: 'Габаритные размеры (мм)', sortable: false, showInTable: false },
            { key: 'weight', label: 'Масса', sortable: false, showInTable: false },
            { key: 'appliedboxes', label: 'Применяемые стерилизационные коробки', sortable: false, showInTable: false }
            //{ key: 'humidity', label: 'Остаточная влажность (%)', sortable: true, showInTable: true },
            //{ key: 'temperature', label: 'Точность температуры (°C)', sortable: true, showInTable: true },
        ],
        filters: [
            { key: 'all', label: 'Все модели' },
            { key: 'small', label: 'Малые объемы', condition: (product) => (product.specifications?.volume || 0) < 50 },
            { key: 'large', label: 'Большие объемы', condition: (product) => (product.specifications?.volume || 0) >= 50 }
        ],
        sortOptions: [
            { value: 'name', label: 'По названию' },
            { value: 'volume', label: 'По объему' }
        ]
    },

    equipment: {
        columns: [
            { key: 'name', label: 'Модель', sortable: true },
            { key: 'purpose', label: 'Назначение', sortable: false },
            { key: 'efficiency', label: 'Производительность (л/ч)', sortable: false },
            { key: 'tan', label: 'Нагревательные элементы', sortable: false },
            { key: 'quality', label: 'Качество производимой воды', sortable: false },
            { key: 'voltage', label: 'Напряжение', sortable: false },
            { key: 'power', label: 'Мощность (кВт)', sortable: true },
            { key: 'dimensions', label: 'Габаритные размеры (мм)', sortable: true },
            { key: 'weight', label: 'Масса (кг)', sortable: true },

            { key: 'material', label: 'Материал', sortable: false },
            { key: 'tochamber', label: 'Применение для камер', sortable: false, showInTable: false },
            { key: 'pressure', label: 'Рабочее давление', sortable: false, showInTable: false }
        ],
        filters: [
            { key: 'all', label: 'Все оборудование' },
            { key: 'mobile', label: 'Мобильное', condition: (product) => (product.specifications?.weight || 0) < 100 },
            { key: 'stationary', label: 'Стационарное', condition: (product) => (product.specifications?.weight || 0) >= 100 }
        ],
        sortOptions: [
            { value: 'name', label: 'По названию' },
            { value: 'power', label: 'По мощности' },
            { value: 'weight', label: 'По весу' }
        ]
    }
};