import { clerkClient } from "@clerk/clerk-sdk-node";
import { CanActivate, ExecutionContext, Injectable, Logger } from "@nestjs/common";

@Injectable()
export class ClerkAuthGuard implements CanActivate {
    private readonly logger = new Logger();
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest()
        const token = request.cookies.__sesion;

        if (!token) {
            return false;
        }

        try {
            await clerkClient.verifyToken(token)
        } catch (error) {
            this.logger.error(error)
            return false
        }

        return true
    }
}