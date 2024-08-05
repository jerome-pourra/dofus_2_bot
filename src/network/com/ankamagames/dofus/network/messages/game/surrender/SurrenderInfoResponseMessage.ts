import { SurrenderResponse } from "./../../../types/game/surrender/SurrenderResponse";
import { SurrenderVoteResponse } from "./../../../types/game/surrender/vote/SurrenderVoteResponse";
import { ProtocolTypeManager } from "./../../../ProtocolTypeManager";
import { CustomDataWrapper } from "./../../../../../jerakine/network/CustomDataWrapper";
import { ICustomDataInput } from "./../../../../../jerakine/network/ICustomDataInput";
import { ICustomDataOutput } from "./../../../../../jerakine/network/ICustomDataOutput";
import { INetworkMessage } from "./../../../../../jerakine/network/INetworkMessage";
import { NetworkMessage } from "./../../../../../jerakine/network/NetworkMessage";

export class SurrenderInfoResponseMessage extends NetworkMessage
{

	public static readonly protocolId: number = 99;

	public hasSanction: boolean = false;
	public surrenderResponse: SurrenderResponse;
	public surrenderVoteResponse: SurrenderVoteResponse;

    public constructor()
    {
        super();
        this.surrenderResponse = new SurrenderResponse();
        this.surrenderVoteResponse = new SurrenderVoteResponse();
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
        this.deserializeAs_SurrenderInfoResponseMessage(input);
    }

    private deserializeAs_SurrenderInfoResponseMessage(input: ICustomDataInput)
    {
        this._hasSanctionFunc(input);
        let _id2: number = input.readUnsignedShort();
        this.surrenderResponse = ProtocolTypeManager.getInstance(SurrenderResponse,_id2);
        this.surrenderResponse.deserialize(input);
        let _id3: number = input.readUnsignedShort();
        this.surrenderVoteResponse = ProtocolTypeManager.getInstance(SurrenderVoteResponse,_id3);
        this.surrenderVoteResponse.deserialize(input);
    }

    private _hasSanctionFunc(input: ICustomDataInput)
    {
        this.hasSanction = input.readBoolean();
    }

}