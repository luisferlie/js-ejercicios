const accounts=[
    {
        owner: 'Sarah Smith',
        movements:[
            {
                date: '2021-01-01',
                value: 1000,
            },
            {
                date: '2021-01-02',
                value: 2000,
            },
            {
                date: '2021-01-03',
                value: 3000,
            },
            {
                date: '2021-01-04',
                value: 4000,
            },
            {
                date: '2021-01-05',
                value: 5000,
            },
            {
                date: '2021-01-06',
                value: 6000,
            },
            {
                date: '2021-01-07',
                value: 7000,
            },
            {
                date: '2021-01-08',
                value: 8000,
            }
        ],
        interestRate: 1,
        pin: 4444,
      },
      {
        owner: 'Luis Fernandez',
        movements:[
            {
                date: '2021-01-01',
                value: 1000,
            },
            {
                date: '2021-01-02',
                value: 2000,
            },
            {
                date: '2021-01-03',
                value: 3000,
            },
            {
                date: '2021-01-04',
                value: 4000,
            },
            {
                date: '2021-01-05',
                value: 5000,
            },
            {
                date: '2021-01-06',
                value: 6000,
            },
            {
                date: '2021-01-07',
                value: 7000,
            },
            {
                date: '2021-01-08',
                value: 8000,
            }
        ],
        interestRate: 1,
        pin: 3333,
      },
      {
        owner: 'Juan poe',
        movements:[
            {
                date: '2021-01-01',
                value: 1000,
            },
            {
                date: '2021-01-02',
                value: 2000,
            },
            {
                date: '2021-01-03',
                value: 3000,
            },
            {
                date: '2021-01-04',
                value: 4000,
            },
            {
                date: '2021-01-05',
                value: 5000,
            },
            {
                date: '2021-01-06',
                value: 6000,
            },
            {
                date: '2021-01-07',
                value: 7000,
            },
            {
                date: '2021-01-08',
                value: 8000,
            }
        ],
        interestRate: 1,
        pin: 2222,
      },
      {
        owner: 'pepe pin',
        movements:[
            {
                date: '2021-01-01',
                value: 1000,
            },
            {
                date: '2021-01-02',
                value: 2000,
            },
            {
                date: '2021-01-03',
                value: 3000,
            },
            {
                date: '2021-01-04',
                value: 4000,
            },
            {
                date: '2021-01-05',
                value: 5000,
            },
            {
                date: '2021-01-06',
                value: 6000,
            },
            {
                date: '2021-01-07',
                value: 7000,
            },
            {
                date: '2021-01-08',
                value: 8000,
            }
        ],
        interestRate: 1,
        pin: 1111,
      },
    ]

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
 
};
createUsernames(accounts);



   

  