using System;

namespace WebScrapper.Core.Helpers.Domain
{
    public interface IDomainEntity
    {
        Guid Id { get; }
    }
}