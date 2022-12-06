import json
import csv


with open('books.json') as file:
    books = json.load(file)


def select_categories(books):
    return {
            category: 0 for book in books
            for category in book['categories']
            if category != ''}


def count_books_by_categories(books, categories):
    for book in books:
        for category in book['categories']:
            if category != '':
                categories[category] += 1
    return categories


def calculate_percentage(categories, total_books):
    return [
            [category, round(amout_books / total_books * 100, 2)]
            for category, amout_books in categories.items()]


def save_to_csv(data):
    with open('report.csv', 'w') as file:
        writer = csv.writer(file)
        writer.writerow(['Category', 'Percentage'])
        writer.writerows(data)


if __name__ == '__main__':
    categories = select_categories(books)
    count_books_by_categories = count_books_by_categories(books, categories)
    total_books = len(books)
    data = calculate_percentage(count_books_by_categories, total_books)
    save_to_csv(data)
