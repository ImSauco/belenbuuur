from fastapi import APIRouter, Depends, HTTPException
from ..dependencies import get_current_user
from backend.models import User
from backend.database import db
from backend.models import Product
from sqlalchemy.orm import Session

router = APIRouter()

@router.get("/admin")
def admin_dashboard(current_user: User = Depends(get_current_user)):
    if current_user.role != 'admin':
        raise HTTPException(status_code=403, detail="No tienes permiso para acceder a esta ruta")
    
    return {"message": "Bienvenido al panel de administración", "user": current_user.username}

@router.get("/admin/users")
def get_all_users(current_user: User = Depends(get_current_user)):
    if current_user.role != 'admin':
        raise HTTPException(status_code=403, detail="No tienes permiso para acceder a esta ruta")
    
    users = db.query(User).all()
    return users


@router.delete("/admin/users/{user_id}")
def delete_user(
    user_id: int,
    current_user: User = Depends(get_current_user)
): 
    if current_user.role != 'admin':
        raise HTTPException(status_code=403, detail="No tienes permiso para eliminar usuarios")
    
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="Usuario no encontrado")
    
    db.delete(user)
    db.commit()
    return {"message": "Usuario eliminado", "user": user.username}


