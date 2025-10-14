      let books = [
        {
          title: "Speaking JavaScript",
          author: "Axel Rauschmayer",
          pages: 460,
        },
        {
          title: "Programming JavaScript Applications",
          author: "Eric Elliott",
          pages: 254,
        },
        {
          title: "Understanding ECMAScript 6",
          author: "Nicholas C. Zakas",
          pages: 352,
        },
      ];

      books.push({
        title: "Learning JavaScript Design Patterns",
        author: "Addy Osmani",
        pages: 254,
      });

      console.log(books.length);
      books.forEach((book) => console.log(book.title));

      let lastTwoBooks = books.slice(-2);
      lastTwoBooks.forEach((book) => console.log(book.title));

      books.shift();

      console.log(books.length);
      books.forEach((book) => console.log(book.title));

      let totalPages = books.reduce((sum, book) => sum + book.pages, 0);
      console.log(totalPages);