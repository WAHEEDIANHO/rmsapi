import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
import { UserRole } from '../user/entities/user.schema';
import { ROLES_KEY } from './role.decorator';

@Injectable()
export class RoleAuthGuard implements CanActivate {
  
  constructor(private reflector: Reflector) {}
  async canActivate(
    context: ExecutionContext,
  ): Promise<boolean>  {
    
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    
    const requiredRole = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    
    if (!requiredRole) return true;
    console.log(user)
    return requiredRole.some((role) => user.role?.includes(role));
  }
}