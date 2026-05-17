import json
import os
import psycopg2

def handler(event: dict, context) -> dict:
    """Возвращает список всех товаров из базы данных."""

    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400',
            },
            'body': ''
        }

    conn = psycopg2.connect(os.environ['DATABASE_URL'])
    cur = conn.cursor()

    cur.execute("""
        SELECT id, name, category, price, old_price,
               description, full_description, emoji, tags, featured
        FROM t_p15282150_digital_store_catalo.products
        ORDER BY id
    """)

    rows = cur.fetchall()
    cur.close()
    conn.close()

    products = []
    for row in rows:
        products.append({
            'id':              row[0],
            'name':            row[1],
            'category':        row[2],
            'price':           row[3],
            'oldPrice':        row[4],
            'description':     row[5],
            'fullDescription': row[6],
            'emoji':           row[7],
            'tags':            list(row[8]) if row[8] else [],
            'featured':        bool(row[9]),
        })

    return {
        'statusCode': 200,
        'headers': {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        'body': json.dumps(products, ensure_ascii=False)
    }
