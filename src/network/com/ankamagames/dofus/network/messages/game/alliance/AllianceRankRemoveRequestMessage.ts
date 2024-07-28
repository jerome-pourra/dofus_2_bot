import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class AllianceRankRemoveRequestMessage extends NetworkMessage
{

	public static readonly protocolId: number = 3428;

	public rankId: number = 0;
	public newRankId: number = 0;

    public constructor()
    {
        super();
    }

    public override pack(output: ICustomDataOutput)
    {

    }

    public override unpack(input: ICustomDataInput, length: number)
    {
        this.deserialize(input);
    }

    public deserialize(input: ICustomDataInput)
    {
        this.deserializeAs_AllianceRankRemoveRequestMessage(input);
    }

    private deserializeAs_AllianceRankRemoveRequestMessage(input: ICustomDataInput)
    {
        this._rankIdFunc(input);
        this._newRankIdFunc(input);
    }

    private _rankIdFunc(input: ICustomDataInput)
    {
        this.rankId = input.readVarUhInt();
        if(this.rankId < 0)
        {
            throw new Error("Forbidden value (" + this.rankId + ") on element of AllianceRankRemoveRequestMessage.rankId.");
        }
    }

    private _newRankIdFunc(input: ICustomDataInput)
    {
        this.newRankId = input.readVarUhInt();
        if(this.newRankId < 0)
        {
            throw new Error("Forbidden value (" + this.newRankId + ") on element of AllianceRankRemoveRequestMessage.newRankId.");
        }
    }

}