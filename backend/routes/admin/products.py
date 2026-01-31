from fastapi import APIRouter, Depends, HTTPException
from ..dependencies import get_current_user
from backend.models import User, Product
from backend.database import db
from sqlalchemy.orm import Session

router = APIRouter()

@router.get("/admin/products")
def get_all_products(current_user: User = Depends(get_current_user)):
    if current_user.role != 'admin':
        raise HTTPException(status_code=403, detail="No tienes permiso para acceder a esta ruta")
    
    products = db.query(Product).all()
    return products

@router.put("/admin/products/{product_id}")
def update_product_stock(
    product_id: int,
    new_stock: int,
    current_user: User = Depends(get_current_user)
):
    if current_user.role != 'admin':
        raise HTTPException(status_code=403, detail="No tienes permiso para modificar productos")
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    product.stock = new_stock
    db.commit()
    db.refresh(product)
    return {"message": "Stock actualizado", "product": product.name, "new_stock": product.stock}

@router.post("/admin/products")
def create_product(
    name: str, description: str,
    price: float, stock: int,
    current_user: User = Depends(get_current_user)
):
    if current_user.role != 'admin':
        raise HTTPException(status_code=403, detail="No tienes permiso para crear productos")
    
    new_product = Product(name=name, description=description, price=price, stock=stock)
    db.add(new_product)
    db.commit()
    db.refresh(new_product)
    
    return {"message": "Producto creado", "product": new_product.name}

@router.delete("/admin/products/{product_id}")
def delete_product(
    product_id: int,
    current_user: User = Depends(get_current_user)
):
    if current_user.role != 'admin':
        raise HTTPException(status_code=403, detail="No tienes permiso para eliminar productos")
    
    product = db.query(Product).filter(Product.id == product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Producto no encontrado")
    
    db.delete(product)
    db.commit()
    return {"message": "Producto eliminado", "product": product.name}