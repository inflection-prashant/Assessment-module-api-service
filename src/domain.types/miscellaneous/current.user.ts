
export interface CurrentUser {
    UserId: string;
    FirstName: string;
    LastName: string;
    CountryCode: number;
    Phone: string;
    Email: string;
    UserName: string;
    Password: string;
    // CurrentRoleId: number;
    // CurrentRoleName?: string;
    SessionId: string;
}
